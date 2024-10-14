'use strict'

import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.workspace.onWillSaveTextDocument(function (evt) {
            if (evt.document.languageId === 'code-text-binary') {
                return
            }

            const targetEol = function () {
                const filesEolConfig = vscode.workspace.getConfiguration('files').get<string>('eol')
                switch (filesEolConfig) {
                    case '\n':
                        return vscode.EndOfLine.LF
                    case '\r\n':
                        return vscode.EndOfLine.CRLF
                    default:
                        return null
                }
            }()

            if (targetEol && evt.document.eol !== targetEol) {
                vscode.window.activeTextEditor?.edit(function (edit) {
                    edit.setEndOfLine(targetEol)
                })
            }
        })
    )
}

export function deactivate() { }
