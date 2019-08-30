// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://github.com/codemirror/CodeMirror/blob/master/addon/fold/comment-fold.js

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface FoldHelper {
        comment(mode: ModeMap): PositionRange;
    }
}
