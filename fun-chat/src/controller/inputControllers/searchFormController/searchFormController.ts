import { ISearchFormController } from './searchFormController.interface';

class SearchFormController implements ISearchFormController {
  public addSearchFormEventListener(formContainer: HTMLElement): void {
    const searchInput = formContainer.querySelector('.input-search') as HTMLInputElement;

    searchInput.addEventListener('input', () => {
      const usersContainer = document.querySelector('.users-container') as HTMLElement;

      if (!usersContainer) {
        return;
      }

      const usersItems = usersContainer.querySelectorAll('.user-item') as NodeListOf<HTMLElement>;

      if (!usersItems) {
        return;
      }

      usersItems.forEach((item) => {
        const searchText = searchInput.value.toLowerCase();

        const itemText = item.textContent!.toLowerCase();
        if (itemText.includes(searchText)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}

export default SearchFormController;
