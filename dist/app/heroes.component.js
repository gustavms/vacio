System.register(["angular2/core","angular2/router","./hero-detail.component","./hero.service"],function(e,t){"use strict";var o,r,n,i,c,s=(t&&t.id,this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,c=3>i?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(3>i?n(c):i>3?n(t,o,c):n(t,o))||c);return i>3&&c&&Object.defineProperty(t,o,c),c}),a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0};return{setters:[function(e){o=e},function(e){r=e},function(e){n=e},function(e){i=e}],execute:function(){c=function(){function e(e,t){this._router=e,this._heroService=t}return e.prototype.getHeroes=function(){var e=this;this._heroService.getHeroes().then(function(t){return e.heroes=t})},e.prototype.ngOnInit=function(){this.getHeroes()},e.prototype.onSelect=function(e){this.selectedHero=e},e.prototype.gotoDetail=function(){this._router.navigate(["HeroDetail",{id:this.selectedHero.id}])},e=s([o.Component({selector:"my-heroes",templateUrl:"app/heroes.component.html",styleUrls:["app/heroes.component.css"],directives:[n.HeroDetailComponent]}),a("design:paramtypes",[r.Router,i.HeroService])],e)}(),e("HeroesComponent",c)}}});