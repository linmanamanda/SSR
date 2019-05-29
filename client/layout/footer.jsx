import styles from '../assets/stylus/footer.styl'

export default {
  data () {
    return {
      author: 'Jokcy'
    }
  },
  render () {
    return (
      <div className={styles.footer}>
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
