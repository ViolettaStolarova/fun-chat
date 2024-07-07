import { SEARCH_ICON } from '../../../../../../constants/chatPageConstants';
import SearchFormController from '../../../../../../controller/inputControllers/searchFormController/searchFormController';
import CreateElement from '../../../../../../utilities/createElement';
import CreateInputElement from '../../../../../../utilities/createInputElement';

class SearchFormView {
  private searchFormController: SearchFormController = new SearchFormController();

  public render(): HTMLElement {
    const searchFormContainer = this.createSearchFormContainer();

    this.searchFormController.addSearchFormEventListener(searchFormContainer);

    return searchFormContainer;
  }

  private createSearchFormContainer(): HTMLElement {
    const searchFormContainer = new CreateElement('div', {
      className: 'search-form-container',
    }).createElement();

    const searchForm = this.createSearchForm();

    searchFormContainer.append(searchForm);

    return searchFormContainer;
  }

  private createSearchForm(): HTMLElement {
    const searchForm = new CreateElement('form', {
      className: 'search-form',
    }).createElement() as HTMLFormElement;

    const formSearchInput = new CreateInputElement({
      placeholder: `${SEARCH_ICON} Search`,
      className: `input-search`,
    }).createElement();

    searchForm.append(formSearchInput);

    return searchForm;
  }
}

export default SearchFormView;
