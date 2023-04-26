export const coordonnes = [
  {
    id: 'mail',
    icone: 'bi bi-envelope',
    title: 'xxxx@xxx.com',
  },
  {
    id: 'adress',
    icone: 'bi bi-geo-alt-fill',
    title: 'adresse',
  },
  {
    id: 'telephone',
    icone: 'bi bi-whatsapp',
    title: 'XXX-XXX-XXX',
  },
]

export const blogElemens = [
  {
    id: 'blog-1',
    cover:
      'https://www.marketing-management.io/hubfs/0%20-%20Couverture%20Blog/creer%20couverture%20ebook.jpg',
    title: 'Titre du blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
  },
  {
    id: 'blog-2',
    cover:
      'https://f.hellowork.com/blogdumoderateur/2018/12/reseaux-sociaux.jpg',
    title: 'Titre du blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
  },
  {
    id: 'blog-3',
    cover:
      'https://www.redacteur.com/blog/wp-content/uploads/sites/6/2020/11/redacteur-blog-img-livre-blanc-newsletter.jpg',
    title: 'Titre du blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
  },
  {
    id: 'blog-4',
    cover:
      'https://www.shutterstock.com/image-photo/banner-on-very-peri-lavender-260nw-2111435741.jpg',
    title: 'Titre du blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
  },
  {
    id: 'blog-83',
    cover:
      'https://www.redacteur.com/blog/wp-content/uploads/sites/6/2020/11/redacteur-blog-img-livre-blanc-newsletter.jpg',
    title: 'Titre du blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
  },
  {
    id: 'blog-*4',
    cover:
      'https://www.shutterstock.com/image-photo/banner-on-very-peri-lavender-260nw-2111435741.jpg',
    title: 'Titre du blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
  },
  {
    id: 'blog-53',
    cover:
      'https://www.redacteur.com/blog/wp-content/uploads/sites/6/2020/11/redacteur-blog-img-livre-blanc-newsletter.jpg',
    title: 'Titre du blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
  },
  {
    id: 'blog-44',
    cover:
      'https://www.shutterstock.com/image-photo/banner-on-very-peri-lavender-260nw-2111435741.jpg',
    title: 'Titre du blog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ',
  },
]

export const experience = (number, word) => {
  return (
    <h3 className="col-md-4 col-5 py-2 text-center border m-2 rounded-3 text-break">
      <div style={{ color: '#00aff9', border: '#00aff9' }}>+{number}</div>{' '}
      {word}
    </h3>
  )
}

export const HeaderContent = [
  {
    id: '1',
    href: 'accueil',
    icone: 'bi-house-door-fill',
    text: 'Accueil',
  },
  {
    id: '2',
    href: 'aboutme',
    icone: 'bi-person-circle',
    text: 'à Propos de moi',
  },
  {
    id: '3',
    href: 'galerie',
    icone: 'bi-images',
    text: 'Ma galerie',
  },
  {
    id: '4',
    href: 'blog',
    icone: 'bi-chat-left-text',
    text: 'Mon blog',
  },
  {
    id: '5',
    href: 'contact',
    icone: 'bi-telephone-fill',
    text: 'Contactez-moi',
  },
]
