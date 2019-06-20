import { Component } from '@angular/core';

import { CreatureTemplateService } from '../../../../services/editors/creature/creature-template.service';
import { CreatureTemplate } from '../../../../types/creature-template.type';
import { SingleRowEditorComponent } from '../../shared/single-row-editor.component';
import { CreatureHandlerService } from '../../../../services/handlers/creature-handler.service';
import { UNIT_FLAGS_2 } from '../../../../constants/flags/unit-flags2';
import { INHABIT_TYPE } from '../../../../constants/flags/inhabit-type';
import { TRAINER_TYPE } from '../../../../constants/options/trainer-type';
import { NPC_FLAGS } from '../../../../constants/flags/npc-flags';
import { CREATURE_FAMILY } from '../../../../constants/options/creature-family';
import { FACTIONS } from '../../../../constants/options/faction';
import { CREATURE_TYPE } from '../../../../constants/options/creature-type';
import { CREATURE_TYPE_FLAGS } from '../../../../constants/flags/creature-type-flags';
import { RANK } from '../../../../constants/options/rank';
import { UNIT_FLAGS } from '../../../../constants/flags/unit-flags';
import { DYNAMIC_FLAGS } from '../../../../constants/flags/dynamic-flags';
import { CREATURE_CLASS } from '../../../../constants/options/creature-class';
import { CREATURE_RACE } from '../../../../constants/options/creature-race';
import { MOVEMENT_TYPE } from '../../../../constants/options/movement-type';
import { FLAGS_EXTRA } from '../../../../constants/flags/flags-extra';
import { MECHANIC_IMMUNE_MASK } from '../../../../constants/flags/mechanic-immune-mask';

@Component({
  selector: 'app-creature-template',
  templateUrl: './creature-template.component.html',
  styleUrls: ['./creature-template.component.scss']
})
export class CreatureTemplateComponent extends SingleRowEditorComponent<CreatureTemplate> {

  public readonly UNIT_FLAGS = UNIT_FLAGS;
  public readonly UNIT_FLAGS_2 = UNIT_FLAGS_2;
  public readonly INHABIT_TYPE = INHABIT_TYPE;
  public readonly TRAINER_TYPE = TRAINER_TYPE;
  public readonly NPC_FLAGS = NPC_FLAGS;
  public readonly CREATURE_FAMILY = CREATURE_FAMILY;
  public readonly FACTIONS = FACTIONS;
  public readonly CREATURE_TYPE = CREATURE_TYPE;
  public readonly CREATURE_TYPE_FLAGS = CREATURE_TYPE_FLAGS;
  public readonly RANK = RANK;
  public readonly DYNAMIC_FLAGS = DYNAMIC_FLAGS;
  public readonly CREATURE_CLASS = CREATURE_CLASS;
  public readonly CREATURE_RACE = CREATURE_RACE;
  public readonly MOVEMENT_TYPE = MOVEMENT_TYPE;
  public readonly FLAGS_EXTRA = FLAGS_EXTRA;
  public readonly MECHANIC_IMMUNE_MASK = MECHANIC_IMMUNE_MASK;

  constructor(
    public editorService: CreatureTemplateService,
    public handlerService: CreatureHandlerService,
  ) {
    super(editorService, handlerService);
  }
}
