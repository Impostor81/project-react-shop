export default function Footer() {
  return (
    <footer className="page-footer purple darken-3">
      <div className="footer-copyright purple darken-3">
        <div className="container purple darken-3">
        © {new Date().getFullYear()} Copyright
        <a className="grey-text text-lighten-4 right" href="https://github.com/Impostor81/project-react-shop">Repo</a>
        </div>
      </div>
    </footer>
  )
}