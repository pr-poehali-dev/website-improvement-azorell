import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              Azorell
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button>Получить консультацию</Button>
            </div>
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Профессиональные 
                <span className="text-primary"> бизнес-решения</span> для вашего успеха
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы помогаем компаниям достигать новых высот через инновационные подходы и экспертные консультации в сфере бизнеса.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать сотрудничество
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">500+ клиентов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">15 лет опыта</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/980c1222-52b7-4218-95b5-1c186b56d5ad.jpg" 
                alt="Современный офисный центр Azorell"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm opacity-90">Успешных проектов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <CardTitle>Стратегическое планирование</CardTitle>
                <CardDescription>
                  Разработка долгосрочных стратегий развития бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    Анализ рынка и конкурентов
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    SWOT-анализ компании
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    Дорожная карта развития
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-primary" />
                </div>
                <CardTitle>Управленческий консалтинг</CardTitle>
                <CardDescription>
                  Оптимизация бизнес-процессов и структуры управления
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    Реорганизация процессов
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    Автоматизация задач
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    Система KPI
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                </div>
                <CardTitle>Финансовое планирование</CardTitle>
                <CardDescription>
                  Управление финансами и инвестиционное планирование
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    Бюджетирование
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    Финансовый анализ
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-primary mr-2" />
                    Инвестиционные решения
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                О компании Azorell
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы — команда профессионалов с 15-летним опытом работы в сфере бизнес-консалтинга. 
                Наша миссия — помочь компаниям достичь максимальной эффективности и устойчивого роста.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Target" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Индивидуальный подход</h4>
                      <p className="text-sm text-muted-foreground">К каждому клиенту</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Высокое качество</h4>
                      <p className="text-sm text-muted-foreground">Проверенные методы</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Быстрые результаты</h4>
                      <p className="text-sm text-muted-foreground">Эффективное внедрение</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Shield" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Надежность</h4>
                      <p className="text-sm text-muted-foreground">Долгосрочное партнерство</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg">
                Узнать больше о нас
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src="/img/f4f90fb3-b2ac-4f4d-875c-dfa2f9545911.jpg" 
                alt="Команда профессионалов Azorell"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-muted-foreground">
                Готовы обсудить ваш проект? Мы всегда рады новым вызовам!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Компания</label>
                      <Input placeholder="Название компании" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input type="tel" placeholder="+7 (xxx) xxx-xx-xx" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте или задаче..." 
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Адрес</h4>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Деловая, д. 123<br />
                          БЦ "Северная Башня", 25 этаж
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Телефон</h4>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">info@azorell.ru</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Время работы</h4>
                        <p className="text-muted-foreground">
                          Пн-Пт: 9:00 - 18:00<br />
                          Сб-Вс: по договоренности
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-xl">
                  <h4 className="font-semibold mb-3">Бесплатная консультация</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Получите экспертную оценку вашего бизнеса и рекомендации по развитию
                  </p>
                  <Button variant="outline" className="w-full">
                    Записаться на консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">
                Azorell
              </div>
              <p className="text-background/80 mb-4">
                Профессиональные бизнес-решения для вашего успеха
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Facebook" size={16} className="text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Twitter" size={16} className="text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="Linkedin" size={16} className="text-primary" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Стратегическое планирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Управленческий консалтинг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Финансовое планирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аудит бизнес-процессов</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li>г. Москва, ул. Деловая, д. 123</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@azorell.ru</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © 2024 Azorell. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}