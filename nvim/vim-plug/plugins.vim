" auto-install vim-plug
command! -nargs=0 Prettier :CocCommand prettier.formatFile

if empty(glob('~/.config/nvim/autoload/plug.vim'))
  silent !curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  "autocmd VimEnter * PlugInstall
  "autocmd VimEnter * PlugInstall | source $MYVIMRC
endif

call plug#begin('~/.config/nvim/autoload/plugged')
    " Stable version of coc
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    " Better Syntax Support
    Plug 'sheerun/vim-polyglot'
    " File Explorer
    Plug 'scrooloose/NERDTree'
    " post install (yarn install | npm install) then load plugin only for editing supported files
    " Auto pairs for '(' '[' '{'
    Plug 'jiangmiao/auto-pairs'
    Plug 'mhinz/vim-signify'
    Plug 'tpope/vim-fugitive'
    Plug 'vim-airline/vim-airline'
    Plug 'vim-airline/vim-airline-themes'
    Plug 'tpope/vim-rhubarb'
    Plug 'junegunn/gv.vim'
    Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
    Plug 'ryanoasis/vim-devicons'
    Plug 'junegunn/fzf.vim'
    Plug 'airblade/vim-rooter'
    Plug 'tpope/vim-commentary'
    Plug 'morhetz/gruvbox'
    Plug 'ayu-theme/ayu-vim'
    Plug 'joshdick/onedark.vim'
    Plug 'kjwon15/vim-transparent'
    Plug 'AlessandroYorba/Despacio'
    Plug 'sonph/onehalf', { 'rtp': 'vim' }
    Plug 'mhartington/oceanic-next'
    Plug 'wojciechkepka/bogster'
Plug 'vim-scripts/SQLUtilities'
call plug#end()

