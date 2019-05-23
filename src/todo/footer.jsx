import '../assets/stylus/footer.styl';

export default {
    data() {
        return {
            author: 'linman'
        };
    },
    render() {
        return (
            <footer id="footer">
                <span>Written by { this.author }</span>
            </footer>
        )
    },
};