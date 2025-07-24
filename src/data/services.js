export const services = [
  {
    id: 'image',
    title: 'Image Annotation',
    description: 'Precise labeling of images for computer vision applications',
    icon: '🖼️',
    subtypes: [
      '2D Bounding Boxes',
      '3D Cuboid Annotation',
      'Polygon Annotation',
      'Segmentation',
      'Key Point Annotation',
      'Medical Data Annotation'
    ]
  },
  {
    id: 'text',
    title: 'Text Annotation',
    description: 'Accurate text labeling for natural language processing',
    icon: '📝',
    subtypes: [
      'Named Entity Recognition',
      'Sentiment Analysis',
      'Intent Classification',
      'Text Summarization'
    ]
  },
  {
    id: 'video',
    title: 'Video Annotation',
    description: 'Frame-by-frame labeling for video analysis',
    icon: '🎥',
    subtypes: [
      'Object Tracking',
      'Activity Recognition',
      'Temporal Segmentation'
    ]
  },
  {
    id: 'audio',
    title: 'Audio Annotation',
    description: 'Detailed labeling for speech and sound analysis',
    icon: '🎧',
    subtypes: [
      'Speech-to-Text',
      'Speaker Identification',
      'Emotion Detection',
      'Sound Classification'
    ]
  }
];