let g:coc_global_extensions = ['coc-emmet', 'coc-sql', 'coc-css', 'coc-python', 'coc-prettier', 'coc-html', 'coc-json' , 'coc-tsserver', 'coc-angular'] 
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> nn :FZF<CR>
nmap <silent> ff :w<CR>
nmap <silent> ga :Prettier<CR>
nmap <silent> ]] :NERDTreeFind<CR>
map <C-a> <esc>ggVG<CR>
"the most basic configurations
syntax on
"adjust java highlight to change the syntax highlighter
highlight link JavaIdentifier NONE
"adjust python highlight
let g:python_highlight_all = 1
set termguicolors
set background=dark

nnoremap <silent>;; :Commentary<cr>
nnoremap <silent>;; :Commentary<cr>


" vnoremap <leader>' :call ToggleComment()<cr> vnoremap <leader>' :call ToggleComment()<cr>

