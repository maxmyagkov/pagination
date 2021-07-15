import React from 'react'

export const PerPage = React.memo(({ values, changePerPage }) => {

    const [activeValue, setActiveValue] = React.useState(0);


    React.useEffect(() => {
        setActiveValue(JSON.parse(window.localStorage.getItem('activeValue')));
    }, []);


    React.useEffect(() => {
        window.localStorage.setItem('activeValue', activeValue);
    }, [activeValue]);




    return (
        <ul className="nav nav-tabs">
            <p className="text-primary mt-2 me-2" >Кол-во постов на странице:</p>
            {values.map((value, index) => (
                <li
                    key={`${value}_${index}`}
                    className={
                        index !== activeValue
                            ? "nav-link "
                            : "nav-link active"
                    }
                    onClick={() => {
                        changePerPage(value);
                        setActiveValue(index);
                    }}>
                    <a>{value}</a>
                </li>
            ))}
        </ul>
    )
})
