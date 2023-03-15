import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotDto } from "src/shared/entities/spot-dto";

@Component({
  selector: 's2f-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SpotComponent implements OnInit {

  selectedSpot: SpotDto;

  constructor(private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const spotId = ''+this.activeRoute.snapshot.paramMap.get('spotId');
    this.loadSelectedSpot(+spotId);
  }

  loadSelectedSpot(spotId: number) {
    const spotDto = new SpotDto();
    spotDto.id = 15;
    spotDto.floor = -1;
    spotDto.color = 'Blue';
    spotDto.row = 2;
    spotDto.description = "Under The sea";

    this.selectedSpot = spotDto;
  }
}
