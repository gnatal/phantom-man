import Phaser from 'phaser';

class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    init(data) {
        this.score = data.score || 0;
    }

    create() {
        // Background
        this.add.image(400, 300, 'sky');

        // Game Over text
        this.add.text(400, 200, 'GAME OVER', {
            fontSize: '64px',
            fontFamily: 'Arial',
            color: '#ffffff'
        }).setOrigin(0.5);

        // Score text
        this.add.text(400, 280, `Score: ${this.score}`, {
            fontSize: '32px',
            fontFamily: 'Arial',
            color: '#ffffff'
        }).setOrigin(0.5);

        // Restart button
        const restartButton = this.add.text(400, 350, 'Restart Game', {
            fontSize: '32px',
            fontFamily: 'Arial',
            color: '#ffffff',
            backgroundColor: '#1a65ac',
            padding: {
                left: 15,
                right: 15,
                top: 10,
                bottom: 10
            }
        }).setOrigin(0.5);

        // Make button interactive
        restartButton.setInteractive({ useHandCursor: true });
        
        // Hover effects
        restartButton.on('pointerover', () => {
            restartButton.setStyle({ backgroundColor: '#4a85cc' });
        });
        
        restartButton.on('pointerout', () => {
            restartButton.setStyle({ backgroundColor: '#1a65ac' });
        });
        
        // Click handler
        restartButton.on('pointerup', () => {
            this.scene.start('GameScene');
        });
    }
}

export default GameOverScene;