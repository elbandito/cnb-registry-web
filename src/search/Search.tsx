import React from 'react';
import './Search.scss';
import Axios, { AxiosResponse } from 'axios';
import Loader from "react-spinners/RotateLoader";
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { Item as BuildpackItem } from '../buildpack/Item';

function SearchList(props: any) {
    let i = 0;
    const items = props.searchItems.map((item: any) => {
        const newItem = { ...item, ...{ key: i++ } };

        return <BuildpackItem buildpack={newItem} key={i} />
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
                <div className="Search-header">
                    <Container className="py-3">
                        <InputGroup onKeyDown={this.keyPressed}>
                            <FormControl
                                placeholder="Search buildpacks"
                                aria-label="Search buildpacks"
                                size="lg"
                            />
                        </InputGroup>
                    </Container>
                </div>
                <Loader
                    size={80}
                    color={"#2c444e"}
                    loading={this.state.loading}
                />
                <Container>
                    <SearchList searchItems={this.state.searchResults} />
                </Container>
            </div>
        );
    }

    async keyPressed(e: any) {
        if (e.keyCode === 13) {
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
