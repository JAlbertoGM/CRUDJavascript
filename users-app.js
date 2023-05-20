import { renderAddButton } from "./src/users/presentation/render-add-button/render-add-button";
import { renderButtons } from "./src/users/presentation/render-buttons/render-buttons";
import { renderModal } from "./src/users/presentation/render-modal/render-modal";
import { renderTable } from "./src/users/presentation/render-table/render-table";
import usersStore from "./src/users/store/users-store";
import { saveUser } from "./src/users/use-cases/save-user";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';
    //console.log(usersStore.getUsers());

    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async(userLike) => {
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        renderTable();
    });

}