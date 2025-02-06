import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView, 
  Text, 
  TouchableOpacity,
  Platform,
  Share,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import * as Clipboard from 'expo-clipboard';

const DetailScreen = ({ route, navigation }: any) => {
  const { subcategory, category, language, currentExampleIndex = 0 } = route.params || {};
  const [exampleIndex, setExampleIndex] = useState(currentExampleIndex);
  const [copied, setCopied] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [copied]);

  if (!subcategory || !category || !language) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No content available</Text>
      </View>
    );
  }

  const currentExample = subcategory.examples[exampleIndex];
  
  if (!currentExample) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No example found</Text>
      </View>
    );
  }

  const copyCode = async () => {
    await Clipboard.setStringAsync(currentExample.code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const shareCode = async () => {
    try {
      await Share.share({
        message: `${currentExample.title}\n\n${currentExample.code}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const formatExplanation = (text: string) => {
    // First handle bold text (between **)
    const boldFormatted = text.split('**').map((part, index) => 
      index % 2 === 0 ? part : <Text key={`bold-${index}`} style={styles.boldText}>{part}</Text>
    );

    // Then handle highlighted text (between ``)
    return boldFormatted.map((part) => {
      if (typeof part === 'string') {
        return part.split('`').map((subPart, index) => 
          index % 2 === 0 ? subPart : <Text key={`highlight-${index}`} style={styles.highlightText}>{subPart}</Text>
        );
      }
      return part;
    });
  };

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      if (exampleIndex === subcategory.examples.length - 1) {
        navigation.goBack();
        return;
      }
      setExampleIndex(prev => Math.min(subcategory.examples.length - 1, prev + 1));
    } else {
      setExampleIndex(prev => Math.max(0, prev - 1));
    }
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const isLastExample = exampleIndex === subcategory.examples.length - 1;

  return (
    <View style={styles.container}>
      <ScrollView 
        ref={scrollViewRef}
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{currentExample.title}</Text>
        <Text style={styles.description}>{currentExample.description}</Text>

        <View style={styles.codeBlock}>
          <View style={styles.codeHeader}>
            <View style={styles.terminalDots}>
              <View style={[styles.dot, { backgroundColor: '#FF5F56' }]} />
              <View style={[styles.dot, { backgroundColor: '#FFBD2E' }]} />
              <View style={[styles.dot, { backgroundColor: '#27C93F' }]} />
            </View>
            <Text style={styles.codeTitle}>Code Example</Text>
            <View style={styles.codeActions}>
              <TouchableOpacity 
                onPress={copyCode} 
                style={styles.actionButton}
              >
                <View style={[
                  styles.copyButton,
                  copied && { backgroundColor: language?.color || COLORS.primary }
                ]}>
                  <Ionicons 
                    name={copied ? "checkmark" : "copy-outline"} 
                    size={20} 
                    color={copied ? COLORS.white : language?.color || COLORS.dark} 
                  />
                  <Text style={[
                    styles.copyButtonText,
                    { color: language?.color || COLORS.dark },
                    copied && styles.copyButtonTextSuccess
                  ]}>
                    {copied ? 'Copied!' : 'Copy'}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={shareCode} style={styles.actionButton}>
                <Ionicons name="share-outline" size={20} color={language.color} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.codeContainer}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={true}
            >
              <View style={styles.codeWrapper}>
                <Text style={styles.code}>
                  {currentExample.code.split('\n').map((line, index) => {
                    const isComment = line.trim().startsWith('#');
                    return (
                      <Text key={index}>
                        <Text style={[
                          styles.codeLine,
                          isComment && styles.codeComment
                        ]}>
                          {line}
                        </Text>
                        {'\n'}
                      </Text>
                    );
                  })}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>

        {currentExample.output && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Output</Text>
            <View style={styles.outputBox}>
              <View style={styles.outputHeader}>
                <View style={styles.terminalDots}>
                  <View style={[styles.dot, { backgroundColor: '#FF5F56' }]} />
                  <View style={[styles.dot, { backgroundColor: '#FFBD2E' }]} />
                  <View style={[styles.dot, { backgroundColor: '#27C93F' }]} />
                </View>
                <Text style={styles.outputTitle}>Terminal</Text>
              </View>
              <View style={styles.outputContent}>
                <Text style={styles.outputText}>{currentExample.output}</Text>
              </View>
            </View>
          </View>
        )}

        <View style={[styles.section, styles.explanationSection]}>
          <Text style={styles.sectionTitle}>Explanation</Text>
          <Text style={styles.explanation}>
            {formatExplanation(currentExample.explanation)}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.navButton, exampleIndex === 0 && styles.navButtonDisabled]}
          onPress={() => handleNavigation('prev')}
          disabled={exampleIndex === 0}
        >
          <Ionicons name="chevron-back" size={20} color={language.color} />
          <Text style={[styles.navText, { color: language.color }]}>Previous</Text>
        </TouchableOpacity>
        
        <Text style={styles.pageIndicator}>
          {exampleIndex + 1}/{subcategory.examples.length}
        </Text>
        
        <TouchableOpacity 
          style={[
            styles.navButton, 
            isLastExample && styles.completeButton
          ]}
          onPress={() => handleNavigation('next')}
        >
          {isLastExample ? (
            <>
              <Text style={[styles.navText, styles.completeText]}>Complete</Text>
              <Ionicons name="checkmark-circle" size={20} color={COLORS.white} />
            </>
          ) : (
            <>
              <Text style={[styles.navText, { color: language.color }]}>Next</Text>
              <Ionicons name="chevron-forward" size={20} color={language.color} />
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: `${COLORS.dark}90`,
    marginBottom: 24,
    lineHeight: 24,
  },
  codeBlock: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginBottom: 24,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  codeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#2D2D2D',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF10',
  },
  terminalDots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  codeTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF80',
    flex: 1,
    marginLeft: 12,
  },
  codeActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  actionButton: {
    position: 'relative',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${COLORS.dark}10`,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  copyButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  copyButtonTextSuccess: {
    color: COLORS.white,
  },
  codeContainer: {
    maxHeight: undefined,
    minHeight: 100,
  },
  codeWrapper: {
    padding: 16,
    minWidth: '100%',
  },
  code: {
    fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  codeLine: {
    color: '#FFFFFF',
  },
  codeComment: {
    color: '#6A9955', // Green color for comments
    fontStyle: 'italic',
  },
  section: {
    marginBottom: 24,
  },
  explanationSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: 12,
  },
  outputBox: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    overflow: 'hidden',
  },
  outputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#2D2D2D',
  },
  outputTitle: {
    color: '#FFFFFF80',
    fontSize: 13,
    marginLeft: 12,
  },
  outputContent: {
    padding: 16,
  },
  outputText: {
    fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  explanation: {
    fontSize: 16,
    color: COLORS.dark,
    lineHeight: 24,
    marginBottom: 16,
  },
  boldText: {
    fontWeight: '600',
  },
  highlightText: {
    color: COLORS.primary,
    backgroundColor: `${COLORS.primary}15`,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: `${COLORS.dark}10`,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navText: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 4,
  },
  pageIndicator: {
    fontSize: 14,
    color: `${COLORS.dark}80`,
  },
  errorText: {
    fontSize: 16,
    color: COLORS.dark,
    textAlign: 'center',
    marginTop: 20,
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  completeText: {
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default DetailScreen;