import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PasswordModule} from 'primeng/password';
import {TooltipModule} from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import {AccordionModule} from 'primeng/accordion';
import {MenuModule} from 'primeng/menu';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';
import {BlockUIModule} from 'primeng/blockui';
import {CarouselModule} from 'primeng/carousel';
import {BadgeModule} from 'primeng/badge';
import {ListboxModule} from 'primeng/listbox';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {InputSwitchModule} from 'primeng/inputswitch';
import {FileUploadModule} from 'primeng/fileupload';
import {PanelMenuModule} from 'primeng/panelmenu';
import {EditorModule} from 'primeng/editor';
import {ChipsModule} from 'primeng/chips';
import {SelectButtonModule} from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
    exports: [
        InputTextModule,
        AutoCompleteModule,
        ButtonModule,
        PanelModule,
        ToastModule,
        MegaMenuModule,
        TableModule,
        PasswordModule,
        MessageModule,
        CardModule,
        ChartModule,
        TooltipModule,
        ProgressSpinnerModule,
        OverlayPanelModule,
        BreadcrumbModule,
        CalendarModule,
        SidebarModule,
        DialogModule,
        DynamicDialogModule,
        InputTextareaModule,
        MessagesModule,
        RippleModule,
        AccordionModule,
        MenuModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        CheckboxModule,
        BlockUIModule,
        CarouselModule,
        BadgeModule,
        ListboxModule,
        SliderModule,
        MultiSelectModule,
        TabViewModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        InputSwitchModule,
        FileUploadModule,
        PanelMenuModule,
        EditorModule,
        TagModule, 
        ChipsModule,
        PaginatorModule,
        SelectButtonModule
    ],
    providers: [
        MessageService,
        ConfirmationService
    ],
})
export class NgPrimeExportsModule { }
