new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {

    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      var damage = this.calculateDamage(5, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPLayer: true,
        text: 'Player hits Monster for ' + damage + ' points.'
      });
      if (this.checkWin()){
        return;
      };

      this.monsterAttacks();
    },
    specialAttack: function() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPLayer: true,
        text: 'Player hits Monster hard for ' + damage + ' points.'
      });

      if (this.checkWin()){
        return;
      };

      this.monsterAttacks();
    },
    heal: function() {
      if(this.playerHealth <= 90){
        this.playerHealth += 10;
        this.turns.unshift({
          isPLayer: true,
          text: 'Player heals 10 points.'
        });
        this.monsterAttacks();
      } else {
        this.playerHealth = 100;
        this.turns.unshift({
          isPLayer: true,
          text: 'Player is at max points.'
        });

      }
    },
    giveUp: function() {
      this.gameIsRunning = false;
    },
    monsterAttacks: function(){
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPLayer: false,
        text: 'Monster hits Player for ' + damage + ' points.'
      });
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function(){
      if (this.monsterHealth <= 0) {
        if (confirm('Winner, winner, chicken dinner! NewGame?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('Wah, wah wah... NewGame?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
