import { Directive, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDownToggle]'
})
export class DropDownToggleDirective implements OnInit {
  //@HostBinding('className') className: string = 'btn-group';
  // originalClass = this.elRef.nativeElement.className;
  // @HostBinding('className') className = this.originalClass;
  @HostBinding('class.open') isOpen = false;
  constructor(private elRef: ElementRef) { }
  ngOnInit(){
    console.log(this.elRef);
  }
  @HostListener('mouseover') mouseover(eventData: Event){
    this.isOpen = true;
  }
  @HostListener('mouseout') mouseout(eventData: Event){
    // setTimeout(() => {
    //
    // }, 2000);
    // this.className = this.originalClass;
    this.isOpen = false;
  }


}
