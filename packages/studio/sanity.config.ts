import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// Documents
import page from './schemas/documents/page';

// Style objects
import layoutStyles from './schemas/objects/styles/layoutStyles';
import displayStyles from './schemas/objects/styles/displayStyles';

// Layout objects
import layoutStack from './schemas/objects/layoutStack';
import layoutRow from './schemas/objects/layoutRow';
import layoutGrid from './schemas/objects/layoutGrid';

// Display objects
import displayText from './schemas/objects/displayText';
import displayImage from './schemas/objects/displayImage';
import displayCard from './schemas/objects/displayCard';

export default defineConfig({
  name: 'composable-layout',
  title: 'Composable Layout',

  projectId: '8q6jga63',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      // Style objects (must be registered before types that use them)
      layoutStyles,
      displayStyles,
      // Display types (must be registered before layouts that reference them)
      displayText,
      displayImage,
      displayCard,
      // Layout types
      layoutStack,
      layoutRow,
      layoutGrid,
      // Documents
      page,
    ],
  },
});
