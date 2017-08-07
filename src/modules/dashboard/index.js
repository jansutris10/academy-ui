export class Index {
    configureRouter(config, router){
        this.router = router;

        config.map([
            { route: '/', name: 'list', moduleId: './list', nav: true, title: 'Dashboard List' },
            { route: '/view/:id', name: 'view', moduleId: './view', title: 'View Project' },
            { route: '/create', name: 'create', moduleId: './create', title: 'Create Project' },
            { route: '/test', name: 'test', moduleId: './test/index', title: 'Custom Component'},
            { route: '/widget', name: 'widget', moduleId: './widget/index', title: 'Custom Widget'}
        ])
        
    }

}