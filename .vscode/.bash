BASH_HOME="C:\Program Files\Git\bin"
CMD_HOME="C:\WINDOWS\system32"
POWERSHELL_HOME="C:\WINDOWS\System32\WindowsPowerShell\v1.0"
CODE_HOME="C:\Program Files\Microsoft VS Code\bin"
GIT_HOME="C:\Program Files\Git\cmd"
MYSQL_HOME="\dev\mysql\mysql-8.0.26-winx64\bin"
NODE_HOME="\dev\node\node-v20.11.0-win-x64"
PATH=$(/bin/cygpath -p "$BASH_HOME;$CMD_HOME;$POWERSHELL_HOME;$CODE_HOME;$GIT_HOME;$MYSQL_HOME;$NODE_HOME;")
