import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
//import Creator from '../Creator/creator';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';
//import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


class Column extends React.Component{
    
    state = {
      cards: this.props.cards || [],
    }
    //domyślna definicja wartości propsa icon
    static defaultProps = {
      icon: settings.defaultColumnIcon,
      
    }
    render() {

      const {title, icon} = this.props;
      const {cards} = this.state;

      console.log(cards);
      return (
        <section>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={this.props.icon}/>

            </span>
            {this.props.title}
          </h3>

          
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addColumn} />
          </div> 
          


          <div className={styles.cards}>
            {cards.map(cardData => (
              //internowanie
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>

        </section>
      );
       
    }
}
Column.propTypes = {
  cards: PropTypes.any,
  title: PropTypes.string,
  icon: PropTypes.any,
};
export default Column;