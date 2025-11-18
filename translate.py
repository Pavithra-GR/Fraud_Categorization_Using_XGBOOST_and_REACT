from googletrans import Translator

def eng_to_tamil(text):
    try:
        translator = Translator()
        translated = translator.translate(text, src='en', dest='ta')
        return translated.text
    except Exception as e:
        return f"Error occurred: {str(e)}"

def tamil_to_eng(text):
    try:
        translator = Translator()
        translated = translator.translate(text, src='ta', dest='en')
        return translated.text
    except Exception as e:
        return f"Error occurred: {str(e)}"

def main():
    while True:
        print("\nLanguage Converter")
        print("1. English to Tamil")
        print("2. Tamil to English")
        print("3. Exit")
        
        choice = input("Enter your choice (1-3): ")
        
        if choice == '1':
            eng_text = input("Enter English text: ")
            result = eng_to_tamil(eng_text)
            print(f"Tamil translation: {result}")
            
        elif choice == '2':
            tamil_text = input("Enter Tamil text: ")
            result = tamil_to_eng(tamil_text)
            print(f"English translation: {result}")
            
        elif choice == '3':
            print("Goodbye!")
            break
            
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    print("Note: Make sure you have an active internet connection")
    main()