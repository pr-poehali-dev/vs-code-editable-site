import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            BrandName
          </h1>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient-x bg-[length:200%_200%]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Создаём будущее
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Инновационные решения для вашего бизнеса. Современные технологии и креативный подход.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all transform hover:scale-105 shadow-2xl shadow-primary/50"
              onClick={() => scrollToSection('contacts')}
            >
              Начать проект
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О нас
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Мы команда профессионалов, создающая выдающиеся digital-продукты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Rocket',
                title: 'Инновации',
                description: 'Используем передовые технологии для создания уникальных решений'
              },
              {
                icon: 'Users',
                title: 'Команда',
                description: 'Опытные специалисты с креативным подходом к каждому проекту'
              },
              {
                icon: 'Target',
                title: 'Результат',
                description: 'Фокусируемся на достижении ваших бизнес-целей'
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform">
                    <Icon name={item.icon} size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-border/50 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {[
                    { number: '500+', label: 'Проектов' },
                    { number: '98%', label: 'Довольных клиентов' },
                    { number: '10+', label: 'Лет опыта' }
                  ].map((stat, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                      <div className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-foreground/70 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-20 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-xl text-foreground/70">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Напишите нам</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground/80">Имя</label>
                      <Input
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground/80">Сообщение</label>
                      <Textarea
                        placeholder="Расскажите о вашем проекте..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-all transform hover:scale-105"
                      size="lg"
                    >
                      Отправить сообщение
                      <Icon name="Send" size={18} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Email</h4>
                    <p className="text-foreground/70">hello@brandname.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/50 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Телефон</h4>
                    <p className="text-foreground/70">+7 (999) 123-45-67</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-foreground">Адрес</h4>
                    <p className="text-foreground/70">Москва, ул. Примерная, 123</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-foreground">Социальные сети</h4>
                  <div className="flex gap-4">
                    {['Github', 'Linkedin', 'Twitter', 'Instagram'].map((social, index) => (
                      <button
                        key={index}
                        className="w-12 h-12 bg-background/50 rounded-xl flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                      >
                        <Icon name={social} size={20} className="text-foreground" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background/80 backdrop-blur-lg border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-foreground/60">
            © 2024 BrandName. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
