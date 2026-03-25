

alias ga="git add"
__git_complete ga _git_add
alias gs="git status"
alias gl="git log --oneline --graph"
alias gb="git branch"
__git_complete gb _git_branch
alias gc="git commit"
__git_complete gc _git_commit
alias gch="git checkout"
__git_complete gch _git_checkout
alias gp="git push origin"


alias lm="ls -ltrH"
alias ll="ls -ltrH"

alias gball="git branch -r | grep -v '\->' | while read remote; do git branch --track \${remote#origin/} \$remote; done"

