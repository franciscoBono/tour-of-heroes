import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from "../hero";
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  $hero = this.heroService.getHero(Number(this.route.snapshot.paramMap.get('id')));

  goBack(): void {
    this.location.back();
  }

  @Input() hero?: Hero;
}
