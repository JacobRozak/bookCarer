import './carersCard.css'
import BasicModal from '../modal/modal';
import { Carer} from '../../interfaces/carers';
import { Card } from '../../interfaces/carersCard';
const CarersCard = (props: Card["card"]) => {
    return (
        <>
            {
                props.cards.map((card: Carer) => (
                    <div className="card">
                        <div className="card__image-holder">
                            <img className="card__image" src={card.photo} />
                        </div>
                        <div className="card-title">
                            <BasicModal carer={card.name} />
                            <h2>
                                {card.name}
                                <small>{card.slots} avaliable slots</small>
                            </h2>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default CarersCard;
