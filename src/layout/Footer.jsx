function Footer() {
  return  <footer className="page-footer blue lighten-4">
            <div classNameName="footer-copyright">
              <div className="container">
              © {new Date().getFullYear()} Copyright Text
              <a className="grey-text text-lighten-4 right" href="https://github.com/just36?tab=repositories">Repo</a>
              </div>
            </div>
          </footer>
}

export {Footer}