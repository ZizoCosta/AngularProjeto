import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setStyle(this._elementRef.nativeElement,'background-color', 'yellow');
    //this.backgroundColor = 'yellow';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setStyle(this._elementRef.nativeElement,'background-color', 'white');
    //this.backgroundColor = 'white';
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  //defaultColor: string = 'white';
  //highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'white';
  @Input('appHighlight') highlightColor: string = 'yellow';

  constructor() { }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
