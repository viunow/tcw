# tempconverterWeb

A few months ago, I started an exercise to train programming, it was a temperature converter in python, his code is below:

	fare = 100
	cl = (fare - 32)/1.8
	print (cl)


This code is very simple, but it already outlined the idea of having a temperature converter. So I started to improve the converter, as I was learning new things. In this update I already worked creating a function for the conversion.

	def converter (f):
		v = (f - 32)/1.8
		return v

	a = converter(50) 
	print (a)


As I was working on converting only Fahrenheit to Celsius, I decided to update and include Celsius to Fahrenheit and also other temperatures like Kelvin, Rankine and Reamur, the main temperatures used.

farenheit to celsius
	def converter (f):
		v = (f - 32)/1.8
		return v

	a = converter(50) 
	print (a)

celsius to farenheit
	def converter (c):
		return (c * 1.8 + 32)

	print (converter(26))


So far I was working with fixed temperature values, so I thought about including the temperature by user input.

farenheit to celsius with input 
	def converter (f):
		a = (f - 32)/1.8
		return a

	while(True):
		valor = input ("Informe temperatura para conversão:") 
		temperaturaconvertida = converter(int(valor))
		print (" A temperatura " +str(valor)+ " Em Farhenheit, em graus Celsius é: " + str(temperaturaconvertida))
		break
	
	
After a while I started to study C# so I decided to make the temperature converter in C#

	class MainClass {
		public static void Main (string[] args) {
			//fahre to celsius
			Console.WriteLine("Conversor de Fahre to Celsius.");
			Console.Write("Digite a temperatura em graus Fahre: ");
			decimal fahre = Convert.ToDecimal(Console.ReadLine());
			decimal celsius = converterFahre(fahre);
			Console.Write($"A temperatura {fahre} graus Fahre, em graus Celsius é: ");
			Console.WriteLine (celsius);

		}
		static decimal converterFahre (decimal fahre) {
			decimal temperaturaFahreToCelsius = (fahre - 32)/1.8m;
			return temperaturaFahreToCelsius;
		}
	}
	
	
My idea from the beginning was to develop a temperature converter on the web, all the codes I wrote served as a basis for continuing to evolve and achieve the final result.
So I started working with HTML and CSS to create the frontend and I ventured to use JS to do the conversions, until after many attempts the project was completed!
In addition to using HTML, CSS and JS in the project, I discovered the Heroku tool to publish the project, after all, the idea was this, it could be used as a web version.
This forced me to learn to use Heroku and also Git.

Finally, the result was totally satisfactory and this is my first fully functional project and published on the web!

Thanks to Marcos and Michael, who helped me along the way, answering questions and teaching me the right learning path.


Vinicius Neto.
