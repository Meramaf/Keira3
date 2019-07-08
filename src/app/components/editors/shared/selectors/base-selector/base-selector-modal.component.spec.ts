import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap';
import { instance } from 'ts-mockito';
import { HighlightModule } from 'ngx-highlightjs';
import Spy = jasmine.Spy;

import { ItemSelectorModalComponent } from '../item-selector/item-selector-modal.component';
import { BaseSelectorModalComponent } from './base-selector-modal.component';
import { QueryService } from '../../../../../services/query.service';
import { MockedQueryService } from '../../../../../test-utils/mocks';
import { CommonTestModule } from '../../../../../test-utils/common-test.module';
import { CommonEditorTestModule } from '../../../../../test-utils/common-editor-test-module';
import { highlightOptions } from '../../../../../config/highlight.config';
import { SearchService } from '../../../../../services/search/search.service';
import { ItemTemplate } from '../../../../../types/item-template.type';
import { ItemSearchService } from '../../../../../services/search/item-search.service';

describe('BaseSelectorModalComponent', () => {
  let component: BaseSelectorModalComponent;
  let fixture: ComponentFixture<ItemSelectorModalComponent>;
  let searchService: SearchService<ItemTemplate>;
  let hideSpy: Spy;

  const value = 'mock-value';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSelectorModalComponent ],
      imports: [
        CommonTestModule,
        CommonEditorTestModule,
        HighlightModule.forRoot(highlightOptions),
      ],
      providers: [
        BsModalRef,
        { provide: QueryService, useValue: instance(MockedQueryService) },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    searchService = TestBed.get(ItemSearchService);
    searchService.query = '--mock query';

    fixture = TestBed.createComponent(ItemSelectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    hideSpy = spyOn(TestBed.get(BsModalRef), 'hide');
  });

  it('onCancel() should correctly hide the modal', () => {
    component.onCancel();
    expect(hideSpy).toHaveBeenCalledTimes(1);
  });

  it('onSave() should correctly emit the value and hide the modal', () => {
    const nextSpy = spyOn(component.onValueSelected, 'next');
    component.value = value;

    component.onSave();

    expect(nextSpy).toHaveBeenCalledWith(value);
    expect(nextSpy).toHaveBeenCalledTimes(1);
    expect(hideSpy).toHaveBeenCalledTimes(1);
  });
});
