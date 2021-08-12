import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
    const filltered = articles.filter(article => article.id === id);
    if (filltered.length > 0) {
        res.status(200).json(filltered[0]);
    } else {
        res.status(404).json({ message: `Article ${id} is not found` });
    }
}
