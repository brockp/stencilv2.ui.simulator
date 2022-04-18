import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditSidebarService {
  public showHomeEditSidebar = false;
  public homeOnly = false;
  public buttonOnly = false;
  public showHeader = false;
  public showSignUpGraphicSidebar = false;
  public headlineEdit = false;
  public descriptionEdit = false;
  public iconButtonOnly = false;
  public paragraphEdit = false;
  public inputEdit = false;
  public inputCopyEdit = false;
  public linkEdit = false;
  public textAreaEdit = false;
  public textInputEdit = false;
  public editCarousel = false;
  public iconButtonAltEdit = false;
  public primaryButtonEdit = false;
  public spacerEdit = false;

  constructor() {}

  public showSpacerEdit() {
    return (
      (this.buttonOnly = false),
      (this.showHeader = false),
      (this.showHomeEditSidebar = false),
      (this.headlineEdit = false),
      (this.descriptionEdit = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.spacerEdit = true)
    );
  }

  public showHomeEdit() {
    return (
      (this.buttonOnly = true),
      (this.showHeader = false),
      (this.showHomeEditSidebar = false),
      (this.headlineEdit = false),
      (this.descriptionEdit = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showHeaderEdit() {
    return (
      (this.showHeader = true),
      (this.buttonOnly = false),
      (this.showHomeEditSidebar = false),
      (this.headlineEdit = false),
      (this.descriptionEdit = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showSignUpGraphicEdit() {
    return (
      (this.showSignUpGraphicSidebar = true),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.descriptionEdit = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showHeadlineEdit() {
    return (
      (this.headlineEdit = true),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.descriptionEdit = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showDescriptionEdit() {
    return (
      (this.descriptionEdit = true),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showIconButtonEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = true),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showIconButtonAltEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = true),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showInputEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = true),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showParagraphEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = true),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showInputCopyEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = true),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showLinkEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = true),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showTextAreaEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = true),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showTextInputEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = true),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showCarouselEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = true),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }

  public showPrimaryButtonEdit() {
    return (
      (this.descriptionEdit = false),
      (this.headlineEdit = false),
      (this.showSignUpGraphicSidebar = false),
      (this.showHeader = false),
      (this.buttonOnly = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = true),
      (this.spacerEdit = false)
    );
  }

  public hideHomeEdit() {
    return (
      (this.buttonOnly = false),
      (this.showHeader = false),
      (this.showSignUpGraphicSidebar = false),
      (this.headlineEdit = false),
      (this.descriptionEdit = false),
      (this.iconButtonOnly = false),
      (this.paragraphEdit = false),
      (this.inputEdit = false),
      (this.inputCopyEdit = false),
      (this.linkEdit = false),
      (this.textAreaEdit = false),
      (this.textInputEdit = false),
      (this.editCarousel = false),
      (this.iconButtonAltEdit = false),
      (this.primaryButtonEdit = false),
      (this.spacerEdit = false)
    );
  }
}
