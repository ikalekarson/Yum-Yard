import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Yum-Yard';

constructor(
  private router: Router
) {}
   
PizzaLogo : string = 'https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-modern-traditional-food-sasami-pizza-3d-model-png-image_6651528.png'
RollLogo : string = 'https://img.freepik.com/free-photo/delicious-tortilla_144627-12057.jpg?size=626&ext=jpg'
FriesLogo : string = 'https://img.freepik.com/free-photo/french-fries_74190-1192.jpg?w=996&t=st=1687522832~exp=1687523432~hmac=96378bf8274194e8e4b26f6a66b5508551067a8a792271ce820068efc8295bc3'
BurgerLogo : string = 'https://img.freepik.com/free-photo/fresh-hamburger-with-salad-onion_144627-9522.jpg?w=996&t=st=1689616915~exp=1689617515~hmac=084c9a725b2b2692b58c133fb039a49b1bf35be0c6dac0236a4cceb2562c99bf'
NoodlesLogo : string = 'https://static.vecteezy.com/system/resources/thumbnails/024/385/592/small_2x/lasagna-isolated-on-transparent-background-ai-generative-png.png'
PastaLogo : string = 'https://img.freepik.com/free-photo/tagliatelle-pasta-with-tomatoes-chicken_2829-18003.jpg?w=996&t=st=1689616764~exp=1689617364~hmac=203a7021295d7c071aa1f1961ca4e3af115657c84a64745edcc3cbd69ae70f64'

navigateToUser() {
  this.router.navigateByUrl('user')
}

}
