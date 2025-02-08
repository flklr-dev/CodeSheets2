import React from 'react';
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
  const { category, language } = route.params || {};
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  if (!category || !language) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No content available</Text>
      </View>
    );
  }

  const copyCode = async (code: string) => {
    await Clipboard.setStringAsync(code);
    setCopied(true);
  };

  const shareCode = async (title: string, code: string) => {
    try {
      await Share.share({
        message: `${title}\n\n${code}`,
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

  const renderTable = (table: any) => {
    return (
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          {table.headers.map((header: string, index: number) => (
            <Text key={index} style={styles.tableHeaderText}>{header}</Text>
          ))}
        </View>
        {table.rows.map((row: string[], index: number) => (
          <View key={index} style={styles.tableRow}>
            {row.map((cell: string, cellIndex: number) => (
              <Text key={cellIndex} style={styles.tableCell}>{cell}</Text>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.description}>{category.description}</Text>

        {category.examples.map((example, index) => (
          <View key={index} style={styles.exampleContainer}>
            <Text style={styles.exampleTitle}>{example.title}</Text>
            <Text style={styles.exampleDescription}>{example.description}</Text>

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
                    onPress={() => copyCode(example.code)}
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
                  <TouchableOpacity 
                    onPress={() => shareCode(example.title, example.code)}
                    style={styles.actionButton}
                  >
                    <Ionicons name="share-outline" size={20} color={language.color} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.codeContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                  <View style={styles.codeWrapper}>
                    <Text style={styles.code}>{example.code}</Text>
                  </View>
                </ScrollView>
              </View>
            </View>

            {example.table && renderTable(example.table)}

            <View style={styles.explanationSection}>
              <Text style={styles.explanationTitle}>✅ Explanation:</Text>
              <Text style={styles.explanation}>
                {formatExplanation(example.explanation)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: `${COLORS.dark}90`,
    marginBottom: 24,
    lineHeight: 24,
  },
  exampleContainer: {
    marginBottom: 32,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  exampleTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  exampleDescription: {
    fontSize: 16,
    color: `${COLORS.dark}90`,
    marginBottom: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  codeBlock: {
    backgroundColor: '#1E1E1E',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
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
  explanationSection: {
    padding: 16,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: 12,
  },
  explanation: {
    fontSize: 16,
    color: COLORS.dark,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: '700',
    color: COLORS.primary,
  },
  highlightText: {
    backgroundColor: `${COLORS.primary}15`,
    color: COLORS.primary,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  table: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: `${COLORS.dark}20`,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: `${COLORS.primary}10`,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.dark}20`,
  },
  tableHeaderText: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.dark,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.dark}10`,
  },
  tableCell: {
    flex: 1,
    padding: 12,
    fontSize: 14,
    color: COLORS.dark,
  },
  errorText: {
    fontSize: 16,
    color: COLORS.dark,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DetailScreen;