Vim�UnDo� ,���;^��Ɋ�9�y*o6�66�'�n��   ;   rimport { Directive, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';                             `�f    _�                            ����                                                                                                                                                                                                                                                                                                                                                             `�e    �       1   3   (   rimport { Directive, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';       )import * as Feather from 'feather-icons';       @Directive({     selector: '[data-feather]'   })   8export class FeatherIconDirective implements OnChanges {     // Private     private _nativeElement: any;       '  @Input('data-feather') name!: string;     @Input() class!: string;     @Input() size!: string;     @Input() inner!: boolean;         /**      * Constructor      *   $   * @param {ElementRef} _elementRef      */     constructor(   8    @Inject(ElementRef) private _elementRef: ElementRef,   I    @Inject(ChangeDetectorRef) private _changeDetector: ChangeDetectorRef     ) {}       '  ngOnChanges(changes: SimpleChanges) {       // Get the native element   9    this._nativeElement = this._elementRef.nativeElement;           // SVG parameter   >    this.name = changes.name ? changes.name.currentValue : '';   W    this.size = changes.size ? changes.size.currentValue : '14'; // Set default size 14   A    this.class = changes.class ? changes.class.currentValue : '';           // Create SVG   0    const svg = Feather.icons[this.name].toSvg({         class: this.class,         width: this.size,         height: this.size5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�b     �          3      sigmport { Directive, ElementRef, Input, Inject, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';5��