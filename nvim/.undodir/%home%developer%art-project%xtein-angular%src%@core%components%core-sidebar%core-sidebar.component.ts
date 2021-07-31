Vim�UnDo� g�� �J��E�(O5����.m�,
�Ǿ��  �                                   `��u    _�                              ����                                                                                                                                                                                                                                                                                                                                                             `��t    �       m  �     ViewEncapsulation   } from '@angular/core';   Ximport { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';   +import { DOCUMENT } from '@angular/common';   5import { MediaObserver } from '@angular/flex-layout';       import { Subject } from 'rxjs';   +import { takeUntil } from 'rxjs/operators';       @import { CoreMediaService } from '@core/services/media.service';   Bimport { CoreConfigService } from '@core/services/config.service';       Ximport { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';       @Component({     selector: 'core-sidebar',   /  templateUrl: './core-sidebar.component.html',   '  encapsulation: ViewEncapsulation.None   })   @export class CoreSidebarComponent implements OnInit, OnDestroy {   #  // Sidebar name (Component input)   
  @Input()     name: string;       1  // Class name for the overlay (Component input)   
  @Input()     overlayClass: string;         // Sidebar Opened     isOpened: boolean;       *  // Collapsible sidebar (Component input)   
  @Input()     collapsibleSidebar: string;         // iscollapsibleSidebar      iscollapsibleSidebar: boolean;       !  // Collapsible Sidebar expanded      @HostBinding('class.expanded')     expanded: boolean;         // Collapsed changed event     @Output()   /  collapsedChangedEvent: EventEmitter<boolean>;         // Opened changed event     @Output()   ,  openedChangedEvent: EventEmitter<boolean>;         // Set overlay visibility   
  @Input()     overlayVisibility: boolean;       "  // Hide sidebar on esc key press   
  @Input()     hideOnEsc: boolean;       _  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {       if (this.hideOnEsc) {         this.close();       }     }       )  // Set menu class for current menu type     menuClass: string;         rootElement: any;         // Private     private _coreConfig: any;     private _collapsed: boolean;   #  private _wasCollapsible: boolean;   !  private _wasCollapsed: boolean;   ,  private _animationPlayer: AnimationPlayer;   .  private _overlay: HTMLElement | null = null;   (  private _unsubscribeAll: Subject<any>;         /**      * Constructor      *      * @param {DOCUMENT} document   !   * @param {Renderer2} _renderer   $   * @param {ElementRef} _elementRef   2   * @param {CoreConfigService} _coreConfigService   2   * @param {ChangeDetectorRef} _changeDetectorRef   0   * @param {CoreMediaService} _coreMediaService   4   * @param {CoreSidebarService} _coreSidebarService   0   * @param {AnimationBuilder} _animationBuilder   *   * @param {MediaObserver} _mediaObserver      */     constructor(   ,    @Inject(DOCUMENT) private document: any,   !    private _renderer: Renderer2,   $    private _elementRef: ElementRef,   2    private _coreConfigService: CoreConfigService,   2    private _changeDetectorRef: ChangeDetectorRef,   0    private _coreMediaService: CoreMediaService,   4    private _coreSidebarService: CoreSidebarService,   0    private _animationBuilder: AnimationBuilder,   )    private _mediaObserver: MediaObserver     ) {       // Set Defaults       this.isOpened = false;   "    this.overlayVisibility = true;       this.hideOnEsc = false;           // Layout root element       this.rootElement =   w      this.document.querySelectorAll('.vertical-layout')[0] || this.document.querySelectorAll('.horizontal-layout')[0];       4    this.collapsedChangedEvent = new EventEmitter();   1    this.openedChangedEvent = new EventEmitter();           // Set Private Defaults       this._collapsed = false;   )    this._unsubscribeAll = new Subject();     }         // Accessors   j  // -----------------------------------------------------------------------------------------------------         /**      * Collapsed      *      * @param {boolean} value      */   
  @Input()   !  set collapsed(value: boolean) {       // Set the collapsed value       this._collapsed = value;       '    // If the sidebar is closed, return       if (!this.isOpened) {   Y      this.rootElement.classList.add('menu-expanded'); // Add menu expanded class default         return;       }           // If Collapsed       if (value) {         // Collapse the sidebar         this.collapse();       <      // Add menu-collapsed in body and remove menu-expanded   7      this.rootElement.classList.add('menu-collapsed');   9      this.rootElement.classList.remove('menu-expanded');       }       // If Expanded   
    else {         // Expanded the sidebar         this.expand();       <      // Add menu-expanded in body and remove menu-collapsed   6      this.rootElement.classList.add('menu-expanded');   :      this.rootElement.classList.remove('menu-collapsed');       }       -    // Emit the 'collapsedChangedEvent' event   4    this.collapsedChangedEvent.emit(this.collapsed);     }         get collapsed(): boolean {       return this._collapsed;     }         // Lifecycle Hooks   j  // -----------------------------------------------------------------------------------------------------         /**      * On init      */     ngOnInit(): void {   &    // Subscribe to app-config changes   ^    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {          this._coreConfig = config;   -      if (config.layout.type == 'vertical') {   0        this.menuClass = 'vertical-menu-modern';         } else {   +        this.menuClass = 'horizontal-menu';         }       });           // Register the sidebar   A    this._coreSidebarService.setSidebarRegistry(this.name, this);           // Setup collapsibleSidebar   $    this._setupCollapsibleSidebar();           // Default collapsed       this._defaultCollapsed();     }         /**      * On destroy      */     ngOnDestroy(): void {   >    // If the sidebar is collapsed, expand it to reset changes       if (this.collapsed) {         this.expand();       }           // Remove sidebar registry   >    this._coreSidebarService.removeSidebarRegistry(this.name);       )    // Unsubscribe from all subscriptions        this._unsubscribeAll.next();   $    this._unsubscribeAll.complete();     }         // Private Methods   j  // -----------------------------------------------------------------------------------------------------         /**   *   * Setup the collapsible sidebar handler      *      * @private      */   ,  private _setupCollapsibleSidebar(): void {   O    // Return if the collapsible sidebar breakpoint was not set from the layout   #    if (!this.collapsibleSidebar) {         return;       }       7    // Set the _wasCollapsible false for the first time   !    this._wasCollapsible = false;       +    // Set the wasCollapsed from the layout   (    this._wasCollapsed = this.collapsed;       $    // On every media(screen) change   `    this._coreMediaService.onMediaUpdate.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {   #      // Get the collapsible status   R      const isCollapsible = this._mediaObserver.isActive(this.collapsibleSidebar);   X      //! On screen resize set the config collapsed state if we have else this.collapsed   T      this._wasCollapsed = this._coreConfig.layout.menu.collapsed || this.collapsed;       g      // If sidebar is not collapsible, switch to overlay menu (On page load without resize the window)   &      // ? Improve this menu condition   3      if (!isCollapsible && this.name === 'menu') {   :        this.rootElement.classList.remove(this.menuClass);   @        this.rootElement.classList.add('vertical-overlay-menu');         }       5      // If the both status are the same, then return   3      if (this._wasCollapsible === isCollapsible) {           return;         }       :      // If isCollapsible is true, use collapsible sidebar         if (isCollapsible) {   ,        // Set the collapsibleSidebar status   )        this.iscollapsibleSidebar = true;       ,        // Set the the opened status to true           this.isOpened = true;       9        this.expanded = true; // Adde expanded class init       .        // Emit the 'openedChangedEvent' event   4        this.openedChangedEvent.emit(this.isOpened);       E        // If the sidebar was collapsed, forcefully collapse it again   !        if (this._wasCollapsed) {             // Collapse              this.collapsed = true;       9          this.expanded = false; // Remove expanded class             // Change detector   1          this._changeDetectorRef.markForCheck();   	        }       N        // If sidebar is collapsible, switch to collapsible menu (modern-menu)   #        if (this.name === 'menu') {   9          this.rootElement.classList.add(this.menuClass);   R          this.rootElement.classList.remove('vertical-overlay-menu', 'menu-hide');   	        }       )        // Hide the overlay if any exists           this._hideOverlay();         }   !      // Else use overlay sidebar         else {   ,        // Set the collapsibleSidebar status   *        this.iscollapsibleSidebar = false;       ;        // Expanded the sidebar in case if it was collapsed           this.expand();       /        // Force the the opened status to close           this.isOpened = false;       .        // Emit the 'openedChangedEvent' event   4        this.openedChangedEvent.emit(this.isOpened);       S        // If sidebar is not collapsible, switch to overlay menu (On window resize)   :        this.rootElement.classList.remove(this.menuClass);   @        this.rootElement.classList.add('vertical-overlay-menu');               // Hide the sidebar           this._hideSidebar();         }       "      // Set the new active status   +      this._wasCollapsible = isCollapsible;       });     }         /**   '   * Setup the initial collapsed status      *      * @private      */   %  private _defaultCollapsed(): void {   *    // Return, if sidebar is not collapsed       if (!this.collapsed) {         return;       }       &    // Return if the sidebar is closed       if (!this.isOpened) {         return;       }           // Collapse the sidebar       this.collapse();     }         /**      * Show the overlay      *      * @private      */      private _showOverlay(): void {   !    // Create the overlay element   8    this._overlay = this._renderer.createElement('div');       =    // Add a class to the overlay element and make it visible   3    this._overlay.classList.add(this.overlayClass);   (    this._overlay.classList.add('show');       <    // If overlayVisibility is false, set the bg transparent   "    if (!this.overlayVisibility) {   4      this._overlay.classList.add('bg-transparent');       }       F    // Append the overlay element to the parent element of the sidebar   \    this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);       C    // Overlay enter animation and attach it to the animationPlayer   2    this._animationPlayer = this._animationBuilder   <      .build([animate('300ms ease', style({ opacity: 1 }))])         .create(this._overlay);       !    // Play the overlay animation   !    this._animationPlayer.play();       M    // Add an event listener to the overlay, on click of it close the sidebar   3    this._overlay.addEventListener('click', () => {         this.close();       });       // Change detector   +    this._changeDetectorRef.markForCheck();     }         /**      * Hide the overlay      *      * @private      */      private _hideOverlay(): void {   +    // If overlay is already hidden, return       if (!this._overlay) {         return;       }       C    // Overlay leave animation and attach it to the animationPlayer   2    this._animationPlayer = this._animationBuilder   <      .build([animate('300ms ease', style({ opacity: 0 }))])         .create(this._overlay);       '    // Play the overlay leave animation   !    this._animationPlayer.play();       $    // Once the animation is done...   (    this._animationPlayer.onDone(() => {   '      // If the overlay still exists...         if (this._overlay) {           // Remove the overlay   <        this._overlay.parentNode.removeChild(this._overlay);           this._overlay = null;         }       });       // Change detector   +    this._changeDetectorRef.markForCheck();     }         /**   1   * Change sidebar properties to make it visible      *      * @private      */      private _showSidebar(): void {   D    // If menu as sidebar, add relevant classes to body to show menu       if (this.name == 'menu') {         // Open overlay menu   2      this.rootElement.classList.add('menu-open');   5      this.rootElement.classList.remove('menu-hide');       }   <    // For default sidebar add show class to make it visible   
    else {   F      this._renderer.addClass(this._elementRef.nativeElement, 'show');   ;      // Add .modal-open from body to remove browser scroll   3      if (this.overlayClass === 'modal-backdrop') {   5        this.rootElement.classList.add('modal-open');         }       }           // Change detector   +    this._changeDetectorRef.markForCheck();     }         /**   3   * Change sidebar properties to make it invisible      *      * @private      */      private _hideSidebar(): void {   D    // If menu as sidebar, add relevant classes to body to show menu       if (this.name == 'menu') {         // Hide overlay menu   5      this.rootElement.classList.remove('menu-open');   2      this.rootElement.classList.add('menu-hide');       }   ?    // For default sidebar remove show class to make it visible   
    else {   I      this._renderer.removeClass(this._elementRef.nativeElement, 'show');       %      // Remove .modal-open from body   3      if (this.overlayClass === 'modal-backdrop') {   8        this.rootElement.classList.remove('modal-open');         }       }           // Change detector   +    this._changeDetectorRef.markForCheck();     }         // Public Methods   j  // -----------------------------------------------------------------------------------------------------         // For Collapsible Sidebar         /**   .   * Collapse the temporarily expanded sidebar      */     collapseTemporarily(): void {   ,    // Only work if the sidebar is collapsed       if (!this.collapsed) {         return;       }            // Collapse the sidebar back       this.expanded = false;           // Change detector   +    this._changeDetectorRef.markForCheck();     }         /**   %   * Expanded the sidebar temporarily      */     expandTemporarily(): void {   ,    // Only work if the sidebar is collapsed       if (!this.collapsed) {         return;       }       '    // Expanded the sidebar temporarily       this.expanded = true;           // Change detector   +    this._changeDetectorRef.markForCheck();     }         /**   "   * On Sidebar's Mouseenter Event      */     @HostListener('mouseenter')     onMouseEnter(): void {   %    // Expand the sidebar temporarily       this.expandTemporarily();     }         /**   "   * On Sidebar's Mouseleave Event      */     @HostListener('mouseleave')5��