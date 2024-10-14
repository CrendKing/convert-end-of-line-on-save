Convert files with configured end-of-line sequence on save

VSCode has two mechanisms of handling end-of-line. The first is the `files.eol` configuration. This mechanism has effect only on files with no pre-existing EOL sequence. VSCode never do conversion to this configured sequence. The second is the "Change End of Line Sequence" command (ID `workbench.action.editor.changeEOL`), as well the "Select End of Line Sequence" icon in the status bar. This mechanism converts existing EOL sequence into the user choice, but requires multiple button clickings.

This extension combines the two mechanisms above. Every time a text files is about to be saved, it converts EOL sequences into the specific one from the `files.eol` configuration. If `files.eol` is configured to be "auto", this extension does nothing.

This extension ignores binary files. However, if user opens a binary file and mark it as one of the text formats, saving it will cause this extension to take effect.
