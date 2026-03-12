export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-wider text-foreground">
              ITZFIZZ
            </h3>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Revolutionizing mobility with innovative design and sustainable
              technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Connect</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ITZFIZZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
