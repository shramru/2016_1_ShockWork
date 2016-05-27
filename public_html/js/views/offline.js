define([
    'backbone',
    'tmpl/game'
], function(
    Backbone,
    tmpl
){

    var View = Backbone.View.extend({
        events: {
            "click .js-go-back":   "goBack",
            "click #restart_button" : "restartButton",
            "click #button_done":"done"
        },
        round: 1,
        cards_counter: 0,
        mana_stack: [],
        AI_power: 0,
        USER_power: 0,
        AI_health: 50,
        USER_health: 50,
        stack_to_delete: [],
        user1_stack: [
            {
                "id": 1,
                "img": "bekbulatov_card",
                "power": 5,
                "mana": 1
            },
            {
                "id": 2,
                "img": "burlak_card",
                "power": 9,
                "mana": 2
            },
            {
                "id": 3,
                "img": "didikin_card",
                "power": 7,
                "mana": 2
            },
            {
                "id": 4,
                "img": "dudina_card",
                "power": 3,
                "mana": 3
            },
            {
                "id": 5,
                "img": "frolov_card",
                "power": 11,
                "mana": 4
            },
            {
                "id": 6,
                "img": "isaikin_card",
                "power": 8,
                "mana": 5
            },
            {
                "id": 7,
                "img": "ivanov_card",
                "power": 4,
                "mana": 6
            },
            {
                "id": 8,
                "img": "korepanov_card",
                "power": 8,
                "mana": 6
            },
            {
                "id": 9,
                "img": "mazcevitc_card",
                "power": 35,
                "mana": 6
            },
            {
                "id": 10,
                "img": "meleshenko_card",
                "power": 4,
                "mana": 1
            },
            {
                "id": 11,
                "img": "mezin_card",
                "power": 6,
                "mana": 2
            },
            {
                "id": 12,
                "img": "mogilin_card",
                "power": 19,
                "mana": 5
            },
            {
                "id": 13,
                "img": "petrov_card",
                "power": 12,
                "mana": 10
            },
            {
                "id": 14,
                "img": "sherbinin_card",
                "power": 61,
                "mana": 5
            },
            {
                "id": 15,
                "img": "shubin_card",
                "power": 45,
                "mana": 4
            },
            {
                "id": 16,
                "img": "smal_card",
                "power": 13,
                "mana": 1
            },
            {
                "id": 17,
                "img": "soloviev_card",
                "power": 9,
                "mana": 4
            },
            {
                "id": 18,
                "img": "stupnikov_card",
                "power": 1,
                "mana": 5
            }
        ],
        AI_stack : [
                {
                    "id": 1,
                    "img": "bekbulatov_card",
                    "power": 5,
                    "mana": 1
                },
                {
                    "id": 2,
                    "img": "burlak_card",
                    "power": 9,
                    "mana": 2
                },
                {
                    "id": 3,
                    "img": "didikin_card",
                    "power": 7,
                    "mana": 2
                },
                {
                    "id": 4,
                    "img": "dudina_card",
                    "power": 3,
                    "mana": 3
                },
                {
                    "id": 5,
                    "img": "frolov_card",
                    "power": 11,
                    "mana": 4
                },
                {
                    "id": 6,
                    "img": "isaikin_card",
                    "power": 8,
                    "mana": 5
                },
                {
                    "id": 7,
                    "img": "ivanov_card",
                    "power": 4,
                    "mana": 6
                },
                {
                    "id": 8,
                    "img": "korepanov_card",
                    "power": 8,
                    "mana": 6
                },
                {
                    "id": 9,
                    "img": "mazcevitc_card",
                    "power": 35,
                    "mana": 6
                },
                {
                    "id": 10,
                    "img": "meleshenko_card",
                    "power": 4,
                    "mana": 1
                },
                {
                    "id": 11,
                    "img": "mezin_card",
                    "power": 6,
                    "mana": 2
                },
                {
                    "id": 12,
                    "img": "mogilin_card",
                    "power": 19,
                    "mana": 5
                },
                {
                    "id": 13,
                    "img": "petrov_card",
                    "power": 12,
                    "mana": 10
                },
                {
                    "id": 14,
                    "img": "sherbinin_card",
                    "power": 61,
                    "mana": 5
                },
                {
                    "id": 15,
                    "img": "shubin_card",
                    "power": 45,
                    "mana": 4
                },
                {
                    "id": 16,
                    "img": "smal_card",
                    "power": 13,
                    "mana": 1
                },
                {
                    "id": 17,
                    "img": "soloviev_card",
                    "power": 9,
                    "mana": 4
                },
                {
                    "id": 18,
                    "img": "stupnikov_card",
                    "power": 1,
                    "mana": 5
                }
            ],
        template: tmpl,
        initialize: function () {
            this.render()
        },
        render: function () {
            this.round = 1;
            this.cards_counter = 0;
            this.mana_stack = [];
            this.AI_power = 0;
            this.USER_power = 0;
            this.AI_health = 50;
            this.USER_health =50;
            this.stack_to_delete = [];
            this.user1_stack = [
            {
                "id": 1,
                "img": "bekbulatov_card",
                "power": 5,
                "mana": 1
            },
            {
                "id": 2,
                "img": "burlak_card",
                "power": 9,
                "mana": 2
            },
            {
                "id": 3,
                "img": "didikin_card",
                "power": 7,
                "mana": 2
            },
            {
                "id": 4,
                "img": "dudina_card",
                "power": 3,
                "mana": 3
            },
            {
                "id": 5,
                "img": "frolov_card",
                "power": 11,
                "mana": 4
            },
            {
                "id": 6,
                "img": "isaikin_card",
                "power": 8,
                "mana": 5
            },
            {
                "id": 7,
                "img": "ivanov_card",
                "power": 4,
                "mana": 6
            },
            {
                "id": 8,
                "img": "korepanov_card",
                "power": 8,
                "mana": 6
            },
            {
                "id": 9,
                "img": "mazcevitc_card",
                "power": 35,
                "mana": 6
            },
            {
                "id": 10,
                "img": "meleshenko_card",
                "power": 4,
                "mana": 1
            },
            {
                "id": 11,
                "img": "mezin_card",
                "power": 6,
                "mana": 2
            },
            {
                "id": 12,
                "img": "mogilin_card",
                "power": 19,
                "mana": 5
            },
            {
                "id": 13,
                "img": "petrov_card",
                "power": 12,
                "mana": 10
            },
            {
                "id": 14,
                "img": "sherbinin_card",
                "power": 61,
                "mana": 5
            },
            {
                "id": 15,
                "img": "shubin_card",
                "power": 45,
                "mana": 4
            },
            {
                "id": 16,
                "img": "smal_card",
                "power": 13,
                "mana": 1
            },
            {
                "id": 17,
                "img": "soloviev_card",
                "power": 9,
                "mana": 4
            },
            {
                "id": 18,
                "img": "stupnikov_card",
                "power": 1,
                "mana": 5
            }
        ];
            this.AI_stack = [
                {
                    "id": 1,
                    "img": "bekbulatov_card",
                    "power": 5,
                    "mana": 1
                },
                {
                    "id": 2,
                    "img": "burlak_card",
                    "power": 9,
                    "mana": 2
                },
                {
                    "id": 3,
                    "img": "didikin_card",
                    "power": 7,
                    "mana": 2
                },
                {
                    "id": 4,
                    "img": "dudina_card",
                    "power": 3,
                    "mana": 3
                },
                {
                    "id": 5,
                    "img": "frolov_card",
                    "power": 11,
                    "mana": 4
                },
                {
                    "id": 6,
                    "img": "isaikin_card",
                    "power": 8,
                    "mana": 5
                },
                {
                    "id": 7,
                    "img": "ivanov_card",
                    "power": 4,
                    "mana": 6
                },
                {
                    "id": 8,
                    "img": "korepanov_card",
                    "power": 8,
                    "mana": 6
                },
                {
                    "id": 9,
                    "img": "mazcevitc_card",
                    "power": 35,
                    "mana": 6
                },
                {
                    "id": 10,
                    "img": "meleshenko_card",
                    "power": 4,
                    "mana": 1
                },
                {
                    "id": 11,
                    "img": "mezin_card",
                    "power": 6,
                    "mana": 2
                },
                {
                    "id": 12,
                    "img": "mogilin_card",
                    "power": 19,
                    "mana": 5
                },
                {
                    "id": 13,
                    "img": "petrov_card",
                    "power": 12,
                    "mana": 10
                },
                {
                    "id": 14,
                    "img": "sherbinin_card",
                    "power": 61,
                    "mana": 5
                },
                {
                    "id": 15,
                    "img": "shubin_card",
                    "power": 45,
                    "mana": 4
                },
                {
                    "id": 16,
                    "img": "smal_card",
                    "power": 13,
                    "mana": 1
                },
                {
                    "id": 17,
                    "img": "soloviev_card",
                    "power": 9,
                    "mana": 4
                },
                {
                    "id": 18,
                    "img": "stupnikov_card",
                    "power": 1,
                    "mana": 5
                }
            ];

            this.userStackTable = $(".score span.my");

            this.$el.html(this.template());

            this.shuffle(this.user1_stack);

            this.shuffle(this.AI_stack); // вот в этот массив апиха отдает то, что выкинул юзер или ИИ
            this.init_table();
            this.draw(this.user1_stack);
        },
        show: function() {
            this.$el.show();
            this.trigger("show",this);
            $('body').addClass('loaded');
            $('h1').css('color', '#222222');
        },
        hide: function() {
            this.$el.find('body').removeClass('loaded');
            this.$el.hide();
        },
        goBack: function() {
            Backbone.history.navigate('', { trigger: true });
        },
        shuffle: function(a) {
            var j, x, i;
            for (i = a.length; i; i -= 1) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
        },
        init_table: function() {
            $(".score span.my").text('0');
            var newThis = this.$el;
            for (var i = 1; i <= 3; i++) {
                $('<div style = "height: 180px; width: 100%"> </div>').
                    data('user', 1)
                    .appendTo(newThis.find('#sortable2')).droppable({
                        accept: '.playing_card',
                        hoverClass: 'hovered',
                        drop: this.handleDrop
                    });
            }
        },
        manaPush: function(mana){
            this.mana_stack.push(mana);
        },
        handleDrop: function(event, ui){
            ui.draggable.data('this').manaPush(ui.draggable.data('class'));
            var cardPower = ui.draggable.data('power');
            ui.draggable.data('this').stack_to_delete.push(ui.draggable.data('number'));
            ui.draggable.addClass( 'correct' );
            ui.draggable.draggable( 'disable' );
            $(this).droppable( 'disable' );
            ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
            ui.draggable.draggable( 'option', 'revert', false );
            ui.draggable.data('this').USER_power += cardPower;
            $(".score span.my").text(ui.draggable.data('this').USER_power);
        },
        draw: function(stack) {
            this.$el.find('#waiter').remove();
            this.stack_to_delete = [];
            cards_counter = 0;
            count = 3;
            if (stack.length < 3) var count = stack.length;
            var newThis = this.$el;
            for (var i=0; i < count; i++ ){
                $('<li class="ui-state-default"  style = "list-style: none;"><img src="img/cards/'+stack[i].img+'.png" alt=""> </li>')
                .data('power', stack[i].power)
                .data('class', stack[i].mana)
                    .data('this',this)
                .data('number', i)
                .attr('id', 'card_user1_' + stack[i].id)
                .attr('class', 'playing_card').appendTo(newThis.find('#user_stack'))
                .draggable({
                    containment: '#content',
                    stack: '#sortable1',
                    cursor: '-webkit-grabbing',
                    revert: true,
                    scroll: false
                });
            }
        },
        aiSimulation: function (stack) {
            this.cards_counter = 0;
            count = 3;
            if (stack.length < 3) var count = stack.length;
            var newThis = this;
            for (var i = 0; i < count; i++) {
                $('<li class="ui-state-default"><img src="img/cards/' + stack[i].img + '.png" alt=""> </li>')
                    .data('power', stack[i].power)
                    .data('class', stack[i].mana)
                    .attr('id', 'card_ai_' + stack[i].id)
                    .attr('class', 'playing_card')
                    .appendTo(newThis.$('#sortable3'));
                newThis.AI_power += stack[i].power;
            }
            this.AI_stack.splice(0, 3);
            return this.AI_power
        },

        done: function () {
            this.$el.find('.playing_card').draggable('disable');
            this.result(this.USER_power, this.aiSimulation(this.AI_stack));
        },

        result: function (user, ai, user_count, ai_count) {
            this.$el.find('.score span.not_my').text(ai);
            var newThis = this;
            if (this.mana_stack[0] == this.mana_stack[1] && this.mana_stack[1] == this.mana_stack[2]) {
                alert("Mana win");
            }
            if (user > ai) {
                newThis.AI_health -= user - ai;
                this.$('#enemy_health').text(this.AI_health);
                newThis.$el.find('#button_done').hide();
                newThis.$el.find('#sortable3').prepend('<img id="theImg" src="img/explosion.gif"  style = "margin-top:5px; margin-left:2%; position:absolute;"/>');
                newThis.$el.find('#sortable3').prepend('<img id="theImg" src="img/explosion.gif"  style = "margin-top:175px; margin-left:2%; position:absolute;"/>');
                newThis.$el.find('#sortable3').prepend('<img id="theImg" src="img/explosion.gif"  style = "margin-top:340px; margin-left:2%; position:absolute;"/>');
                alert('You win this round');
            }
            if (user < ai) {
                newThis.USER_health -= ai - user;
                newThis.$el.find('#your_health').text(this.USER_health);
                newThis.$el.find('#button_done').hide();
                newThis.$el.find('.correct').prepend('<img id="theImg" src="img/explosion.gif"  style = "margin-top:10px; margin-left:26%; position:absolute; z-index: 100;"/>');
               alert("You lost this round");


            }
            if (this.USER_health <= 0) {
                alert('you loose');
                this.render();
            }
            if (this.AI_health <= 0) {
                alert('you win');
                this.render();
            }
            this.$el.find('#restart_button').show();
        },
        restartButton: function(){
            this.round++;
            if (this.round > 5) alert ('game over!');
            this.stack_to_delete.sort();
            this.stack_to_delete.reverse();

            console.log('USER 1 before STACK:');
            console.log(this.user1_stack);

            console.log('STACK TO DELETE');
            console.log(this.stack_to_delete);

            var newThis = this;
            this.stack_to_delete.forEach(function(item, i, stack){
                newThis.user1_stack.splice(item,1);
            });

            console.log('USER 1 after STACK:');
            console.log(this.user1_stack);

            this.AI_power = 0;
            this.USER_power = 0;
            this.mana_stack = [];
            this.$('.score span.not_my').text('?');
            this.$('.result').hide();
            this.$('#sortable2').html('');
            this.$('#sortable3').html('');
            this.$('#user_stack').html('');
            this.$('#button_done').show();
            this.$('#restart_button').hide();
            this.draw(this.user1_stack);
            this.init_table();
    }
    });

    return new View();
});