import React, { useState } from 'react';
import AccountListItemEdit from "../components/Account/AccountListItemEdit";
import AccountListItem from "../components/Account/AccountListItem";


function ListItemContainer(props) {

    const [isEdit, setIsEdit] = useState(true);

    return isEdit
        ? <AccountListItem setIsEdit={setIsEdit} data={props.data} />
        : <AccountListItemEdit setIsEdit={setIsEdit} data={props.data} />
}

export default ListItemContainer;