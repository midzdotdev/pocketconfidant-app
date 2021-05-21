package com.example.chattutorial;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.Resources;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import java.util.ArrayList;

public class ChannelContent extends AppCompatActivity implements MyRecyclerViewAdapter.ItemClickListener {
//public class ChannelContent extends AppCompatActivity implements MyRecyclerViewAdapter.ItemClickListener {
    MyRecyclerViewAdapter adapter;

    // data to populate the RecyclerView with
    public ArrayList<String> contentTitles = new ArrayList<>();
    public ArrayList<Double> contentPrices = new ArrayList<>();
    public ArrayList<String> contentAbstracts = new ArrayList<>();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        getSupportActionBar().setTitle("PocketConfidant AI - Content");
        getSupportActionBar().setBackgroundDrawable(new ColorDrawable(Color.parseColor("#20b6b6")));

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_channel_content);

        Resources r = getResources();
        String[] arrayTitles = getStringArray("titleContent");
        Double[] arrayPrices = getDoubleArray("priceContent");
        String[] arrayAbstracts = getStringArray("abstractContent");

        for (int x = 0; x < arrayTitles.length; x++)
        {
            contentTitles.add(arrayTitles[x]);
            contentAbstracts.add(arrayAbstracts[x]);
            contentPrices.add(arrayPrices[x]);
        }

        // set up the RecyclerView
        RecyclerView recyclerView = findViewById(R.id.rvContents);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        adapter = new MyRecyclerViewAdapter(this, contentTitles);
        adapter.setClickListener(this);
        recyclerView.setAdapter(adapter);
    }

    public String[] getStringArray(String arrayName) {
        SharedPreferences sharedPrefs = getSharedPreferences("myKey", MODE_PRIVATE);
        int size = sharedPrefs.getInt(arrayName + "_size", 0);
        String[] temp = new String[size];
        for (int i = 0; i < size ; i++)
        {
            temp[i] = sharedPrefs.getString(arrayName + "_" + i, "");
        }
        return temp;
    }

    public Double[] getDoubleArray(String arrayName) {
        SharedPreferences sharedPrefs = getSharedPreferences("myKey", MODE_PRIVATE);
        int size = sharedPrefs.getInt(arrayName + "_size", 0);
        Double[] temp = new Double[size];
        for (int i = 0; i < size ; i++)
        {
            temp[i] = (double)sharedPrefs.getFloat(arrayName + "_" + i,0.0f);
        }
        return temp;
    }

    @Override
    public void onItemClick(View view, int position) {
        //Toast.makeText(this, "You clicked " + adapter.getItem(position) + " on row number " + position, Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(this, ContentViewer.class);
        intent.putExtra("title", adapter.getItem(position) );
        intent.putExtra("price", contentPrices.get(position) );
        intent.putExtra("abstract", contentAbstracts.get(position) );
        startActivity(intent);
    }

}

/*
public class MainActivity extends AppCompatActivity implements MyRecyclerViewAdapter.ItemClickListener {

    MyRecyclerViewAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // data to populate the RecyclerView with
        ArrayList<String> animalNames = new ArrayList<>();
        animalNames.add("Horse");
        animalNames.add("Cow");
        animalNames.add("Camel");
        animalNames.add("Sheep");
        animalNames.add("Goat");

        // set up the RecyclerView
        RecyclerView recyclerView = findViewById(R.id.rvAnimals);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        adapter = new MyRecyclerViewAdapter(this, animalNames);
        adapter.setClickListener(this);
        recyclerView.setAdapter(adapter);
    }

    @Override
    public void onItemClick(View view, int position) {
        Toast.makeText(this, "You clicked " + adapter.getItem(position) + " on row number " + position, Toast.LENGTH_SHORT).show();
    }
}

*/