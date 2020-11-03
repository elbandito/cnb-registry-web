import React from 'react';
import './Search.css';
import Axios, {AxiosResponse} from 'axios';
import Loader from "react-spinners/RotateLoader";

function SearchItem(props: any) {
    return (
        <div key={props.item.key} className="Search-item" onClick={() => {}} >
            <div>
                <b>{props.item.ns}/{props.item.name}</b>
            </div>
            <div>v{props.item.version}</div>
            <div>{props.item.addr}</div>
            <div>{props.item.yanked ? 'yanked' : ''}</div>
        </div>
    );
}

function SearchList(props: any) {
    let i = 0;
    const items = props.searchItems.map((item: any) => {
        const newItem = {...item, ...{key: i++}};
        return <SearchItem item={newItem} key={i}/>
    });
    return (
        <div className="Search-list">
            {items}
        </div>
    );
}

class Search extends React.Component<{}, { searchResults: any[], loading: boolean }> {
    constructor(props: any) {
        super(props);
        this.keyPressed = this.keyPressed.bind(this);
        this.state = {
            searchResults: [],
            loading: false
        }
    }

    render() {
        return (
            <div className="Search">
                <header className="Search-header">
                    <div>
                        <input type="text" placeholder="Search Buildpacks..." onKeyDown={this.keyPressed} />
                    </div>
                </header>
                <Loader
                    size={80}
                    color={"#2c444e"}
                    loading={this.state.loading}
                />
                <SearchList searchItems={this.state.searchResults} />
            </div>
        );
    }

    async keyPressed(e: any) {
        if (e.keyCode === 13){
            this.setState({
                searchResults: [],
                loading: e.target.value !== ''
            });
            await this.fetchSearchResults(e.target.value);
        }
    }

    async fetchSearchResults(searchText: string) {
        if (searchText === '') {
            return;
        }

        try {
            const response: AxiosResponse = await Axios.get(`https://cors-anywhere.herokuapp.com/https://glacial-plateau-95350.herokuapp.com/buildpacks?query=${searchText}`);
            if (response.status >= 200 && response.status < 300) {
                this.setState({
                    searchResults: response.data || [],
                    loading: false
                });
            }
        } catch (error) {
            console.error(error);
        }
    }
}

export default Search;
