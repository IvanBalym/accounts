import React, { useState, useEffect } from 'react';
import data from'../exampledata';
import { List } from 'antd';
import ListItemContainer from '../containers/ListItemContainer';
import AccountListHeader from './Account/AccountListHeader';
import AccountAddNew from './Account/AccountAddNew';

function AccountsList() {
    const [isAddNewAccountOpen, setisAddNewAccountOpen] = useState(false);
    const [filterPhrase, setFilter] = useState('');
    const [displayedData, setDisplayedData] = useState([...data.content]);

    useEffect(() => {
        const filtered = data.content.filter((item)=>{
            return item.accountNumber.includes(filterPhrase) || item.name.includes(filterPhrase)
        })
        if(filtered[0]!=='new')filtered.unshift('new')
        setDisplayedData(filtered)
    },[filterPhrase])

    const renderItem = (item) => {
        if (item === 'new') {
            return <AccountAddNew
                        data={item}
                        isOpen={isAddNewAccountOpen} 
                        setIsOpen={setisAddNewAccountOpen}
                    />
        }
        return <ListItemContainer data={item} />
    }

    return (
        <List
            bordered
            header={<AccountListHeader setisAddNewAccountOpen={setisAddNewAccountOpen} setFilter={setFilter} />}
            dataSource={displayedData}
            renderItem={item => renderItem(item)}
        />
    );
}
  
export default AccountsList;
  