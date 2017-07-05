import Quill from './core';

import List, { ListItem } from './formats/list';

import Bold from './formats/bold';
import Italic from './formats/italic';
import Marked from './formats/marked';

import CodeBlock, { Code as InlineCode } from './formats/code';

import Syntax from './modules/syntax';
import Toolbar from './modules/toolbar';

import Icons from './ui/icons';
import Tooltip from './ui/tooltip';

import BubbleTheme from './themes/bubble';

Quill.register({
  'formats/code-block': CodeBlock,
  'formats/list': List,

  'formats/bold': Bold,
  'formats/code': InlineCode,
  'formats/italic': Italic,
  'formats/marked': Marked,

  'formats/list/item': ListItem,

  'modules/syntax': Syntax,
  'modules/toolbar': Toolbar,

  'themes/bubble': BubbleTheme,

  'ui/icons': Icons,
  'ui/tooltip': Tooltip
}, true);

export default Quill;
