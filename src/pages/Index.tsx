import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', course: '' });
  };

  const courses = [
    {
      icon: 'Code2',
      title: 'Основы программирования',
      duration: '3 месяца',
      level: 'Начальный',
      description: 'Python, базовые алгоритмы и структуры данных',
      price: '25 000 ₽'
    },
    {
      icon: 'Globe',
      title: 'Web-разработка',
      duration: '6 месяцев',
      level: 'Средний',
      description: 'HTML, CSS, JavaScript, React и создание сайтов',
      price: '45 000 ₽'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильная разработка',
      duration: '5 месяцев',
      level: 'Средний',
      description: 'React Native, создание приложений для iOS и Android',
      price: '50 000 ₽'
    },
    {
      icon: 'Database',
      title: 'Backend разработка',
      duration: '4 месяца',
      level: 'Продвинутый',
      description: 'Node.js, базы данных, API и серверная логика',
      price: '55 000 ₽'
    }
  ];

  const advantages = [
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Практикующие разработчики из ведущих IT-компаний'
    },
    {
      icon: 'Award',
      title: 'Сертификат',
      description: 'Выдаём сертификат о прохождении курса'
    },
    {
      icon: 'Briefcase',
      title: 'Помощь в трудоустройстве',
      description: 'Содействие в поиске работы и составлении резюме'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Онлайн-занятия в удобное для вас время'
    }
  ];

  const reviews = [
    {
      name: 'Алексей Иванов',
      course: 'Web-разработка',
      text: 'Отличная школа! За 6 месяцев научился создавать сайты с нуля. Сейчас работаю junior-разработчиком.',
      rating: 5
    },
    {
      name: 'Мария Петрова',
      course: 'Основы программирования',
      text: 'Преподаватели объясняют сложные вещи простым языком. Очень довольна результатом!',
      rating: 5
    },
    {
      name: 'Дмитрий Сидоров',
      course: 'Backend разработка',
      text: 'Курс дал мне все необходимые знания для работы. Через месяц после окончания нашёл работу.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-primary/20 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Code2" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              CODIRUM
            </h1>
          </div>
          <div className="flex gap-6 items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium hidden md:block"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium hidden md:block"
            >
              Курсы
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground/80 hover:text-primary transition-colors font-medium hidden md:block"
            >
              Отзывы
            </button>
            <Button 
              onClick={() => scrollToSection('enrollment')}
              className="bg-primary hover:bg-primary/90"
            >
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl text-primary font-mono">{'<code>'}</div>
          <div className="absolute top-40 right-20 text-4xl text-secondary font-mono">{'function()'}</div>
          <div className="absolute bottom-40 left-1/4 text-5xl text-accent font-mono">{'{ }'}</div>
          <div className="absolute bottom-20 right-1/3 text-6xl text-primary font-mono">{'</>'}</div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">
              🚀 Онлайн школа программирования
            </Badge>
            <h2 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                CODIRUM
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-2xl mx-auto">
              Научим программировать с нуля до трудоустройства
            </p>
            <p className="text-lg text-foreground/60 mb-8 max-w-xl mx-auto">
              Практические курсы по веб-разработке, мобильной разработке и backend. 
              Живые занятия с преподавателями-практиками.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30"
                onClick={() => scrollToSection('courses')}
              >
                Выбрать курс
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
                onClick={() => scrollToSection('enrollment')}
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {advantages.map((item, index) => (
              <Card 
                key={index}
                className="bg-card border-primary/20 hover:border-primary/50 transition-all transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon name={item.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Наши курсы
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Выберите направление и начните путь в IT
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index}
                className="bg-card border-primary/20 hover:border-primary/50 transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={course.icon} size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {course.level}
                        </Badge>
                        <Badge variant="outline" className="border-secondary/30 text-secondary">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {course.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                    <Button 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => scrollToSection('enrollment')}
                    >
                      Записаться
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Отзывы учеников
            </h2>
            <p className="text-xl text-foreground/70">
              Что говорят наши выпускники
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="bg-card border-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic leading-relaxed">"{review.text}"</p>
                  <div className="border-t border-primary/20 pt-4">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-foreground/60">{review.course}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="enrollment" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Записаться на курс
            </h2>
            <p className="text-xl text-foreground/70">
              Оставьте заявку и мы свяжемся с вами для консультации
            </p>
          </div>

          <Card className="bg-card border-primary/30 animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <Input
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Интересующий курс</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                    className="w-full px-3 py-2 bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
                  >
                    <option value="">Выберите курс</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course.title}>{course.title}</option>
                    ))}
                  </select>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
                  size="lg"
                >
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-sm text-foreground/60 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-primary/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">CODIRUM</h3>
              </div>
              <p className="text-foreground/70">
                Онлайн школа программирования для начинающих и продвинутых разработчиков
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
              <div className="space-y-2 text-foreground/70">
                <p>📧 info@codirum.ru</p>
                <p>📱 +7 (999) 123-45-67</p>
                <p>📍 Москва, онлайн</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                {['Youtube', 'Instagram', 'MessageCircle'].map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                  >
                    <Icon name={social} size={20} className="text-primary hover:text-white" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-foreground/60">
            <p>© 2024 CODIRUM. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
