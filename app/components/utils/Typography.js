export const Heading = ({ text, color = 'text-dark' }) => {
    return <h1 className={`text-4xl lg:text-6xl font-bold ${color}`}>{text}</h1>;
};

export const SubHeading = ({ text, color = 'text-dark' }) => {
    return <h2 className={`text-3xl lg:text-5xl font-bold ${color}`}>{text}</h2>;
};

export const Description = ({ text, color = 'text-dark' }) => {
    return <p className={`text-lg lg:text-2xl leading-7 lg:leading-10 ${color}`}>{text}</p>;
};
