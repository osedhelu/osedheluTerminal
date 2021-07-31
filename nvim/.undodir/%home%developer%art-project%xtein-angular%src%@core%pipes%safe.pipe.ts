Vim�UnDo� Mt��c�*�$��j�� *�t�6x�����L�   3                                   `�K    _�                              ����                                                                                                                                                                                                                                                                                                                                                             `�J    �       .   )   #   4import { Pipe, PipeTransform } from '@angular/core';   timport { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';       /**    * Sanitize HTML    */   @Pipe({     name: 'safe'   })   0export class SafePipe implements PipeTransform {     /**      * Pipe Constructor      *   $   * @param _sanitizer: DomSanitezer      */     // tslint:disable-next-line   4  constructor(protected _sanitizer: DomSanitizer) {}         /**      * Transform      *      * @param value: string      * @param type: string      */   i  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {       switch (type) {         case 'html':   >        return this._sanitizer.bypassSecurityTrustHtml(value);         case 'style':   ?        return this._sanitizer.bypassSecurityTrustStyle(value);         case 'script':   @        return this._sanitizer.bypassSecurityTrustScript(value);         case 'url':   =        return this._sanitizer.bypassSecurityTrustUrl(value);         case 'resourceUrl':5��