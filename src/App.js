import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/Corona.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    };

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    handleCountyChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country });
    };

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    C
                    <img className={styles.image} src={coronaImage} alt="COVID-19" />
                    VID-19
                </div>
                <Cards data={data} />
                <CountryPicker handleCountyChange={this.handleCountyChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;
